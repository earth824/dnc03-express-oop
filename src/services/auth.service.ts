interface Hasher {
  hash(password: string): string;
  compare(password: string, hash: string): boolean;
}

export class AuthService {
  // Dependency Injection
  constructor(private readonly hashService: Hasher) {}

  register(email: string, password: string) {
    // hash a password
    // const hash = bcrypt.hash(password);
    const hash = this.hashService.hash(password);
  }

  login(email: string, password: string) {
    // compare
    // const isMatch = bcrypt.compare(password, dataInDatabase);
    const isMatch = this.hashService.compare(password, 'DATA_IN_DB');
  }
}
// if we want to replace bcrypt with argon: change old code (not good)
class ArgonService implements Hasher {
  hash(password: string): string {
    // hash by argon
  }
  compare(password: string, hash: string): boolean {
    // compare by argon
  }
}

class BcryptService implements Hasher {
  hash(password: string): string {
    // hash by bcrypt
  }
  compare(password: string, hash: string): boolean {
    // compare by bcrypt
  }
}

new AuthService(new BcryptService());
