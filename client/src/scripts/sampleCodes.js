// Sample code snippets for various applications

export const AviationSoftware = `class FlightController {
  private flightNumber: string;
  private altitude: number;
  private speed: number;
  private coordinates: { lat: number; long: number };

  constructor(flightNumber: string) {
    this.flightNumber = flightNumber;
    this.altitude = 0;
    this.speed = 0;
    this.coordinates = { lat: 0, long: 0 };
  }

  public updatePosition(lat: number, long: number): void {
    this.coordinates = { lat, long };
    this.logPosition();
  }

  public adjustAltitude(newAltitude: number): void {
    if (newAltitude >= 0 && newAltitude <= 40000) {
      this.altitude = newAltitude;
      this.logAltitude();
    }
  }

  private logPosition(): void {
    console.log(\`Flight \${this.flightNumber} position: \${this.coordinates.lat}, \${this.coordinates.long}\`);
  }

  private logAltitude(): void {
    console.log(\`Flight \${this.flightNumber} altitude: \${this.altitude}ft\`);
  }
}`;

export const DatingCalculatorAPI = `class CompatibilityCalculator {
  private userPreferences: {
    ageRange: [number, number];
    location: string;
    interests: string[];
  };

  constructor() {
    this.userPreferences = {
      ageRange: [18, 99],
      location: '',
      interests: []
    };
  }

  public calculateMatch(user1: User, user2: User): number {
    const interestScore = this.calculateInterestMatch(user1.interests, user2.interests);
    const locationScore = this.calculateLocationScore(user1.location, user2.location);
    const ageScore = this.calculateAgeCompatibility(user1.age, user2.age);

    return (interestScore + locationScore + ageScore) / 3;
  }

  private calculateInterestMatch(interests1: string[], interests2: string[]): number {
    const commonInterests = interests1.filter(interest => interests2.includes(interest));
    return commonInterests.length / Math.max(interests1.length, interests2.length);
  }

  private calculateLocationScore(loc1: string, loc2: string): number {
    // Implementation of location distance calculation
    return 0.8; // Placeholder
  }

  private calculateAgeCompatibility(age1: number, age2: number): number {
    const ageDiff = Math.abs(age1 - age2);
    return Math.max(0, 1 - ageDiff / 10);
  }
}`;

export const MultiplayerGameServer = `class GameServer {
  private players: Map<string, Player>;
  private rooms: Map<string, GameRoom>;
  private maxPlayersPerRoom: number;

  constructor() {
    this.players = new Map();
    this.rooms = new Map();
    this.maxPlayersPerRoom = 10;
  }

  public connectPlayer(playerId: string, playerData: PlayerData): void {
    const player = new Player(playerId, playerData);
    this.players.set(playerId, player);
    this.assignPlayerToRoom(player);
  }

  public disconnectPlayer(playerId: string): void {
    const player = this.players.get(playerId);
    if (player) {
      const room = this.rooms.get(player.currentRoom);
      room?.removePlayer(playerId);
      this.players.delete(playerId);
    }
  }

  private assignPlayerToRoom(player: Player): void {
    const availableRoom = this.findAvailableRoom();
    if (availableRoom) {
      availableRoom.addPlayer(player);
    } else {
      this.createNewRoom().addPlayer(player);
    }
  }

  private findAvailableRoom(): GameRoom | null {
    for (const room of this.rooms.values()) {
      if (room.playerCount < this.maxPlayersPerRoom) {
        return room;
      }
    }
    return null;
  }

  private createNewRoom(): GameRoom {
    const roomId = \`room_\${Date.now()}\`;
    const room = new GameRoom(roomId);
    this.rooms.set(roomId, room);
    return room;
  }
}`;

export const SocialMediaPlatform = `class SocialMediaPost {
  private id: string;
  private author: User;
  private content: string;
  private likes: number;
  private comments: Comment[];
  private timestamp: Date;

  constructor(author: User, content: string) {
    this.id = \`post_\${Date.now()}\`;
    this.author = author;
    this.content = content;
    this.likes = 0;
    this.comments = [];
    this.timestamp = new Date();
  }

  public addComment(user: User, text: string): void {
    const comment = new Comment(user, text);
    this.comments.push(comment);
    this.notifyAuthor();
  }

  public like(): void {
    this.likes++;
    this.updateTrendingScore();
  }

  private notifyAuthor(): void {
    this.author.notify(\`New comment on your post: \${this.id}\`);
  }

  private updateTrendingScore(): void {
    const trendingScore = this.calculateTrendingScore();
    TrendingFeed.updatePostScore(this.id, trendingScore);
  }

  private calculateTrendingScore(): number {
    const timeWeight = 1 / (Date.now() - this.timestamp.getTime());
    const engagementWeight = this.likes + (this.comments.length * 2);
    return timeWeight * engagementWeight;
  }
}`;

export const OnlineBankingSystem = `class BankAccount {
  private accountNumber: string;
  private balance: number;
  private transactions: Transaction[];
  private accountType: 'savings' | 'checking';
  private interestRate: number;

  constructor(accountType: 'savings' | 'checking') {
    this.accountNumber = this.generateAccountNumber();
    this.balance = 0;
    this.transactions = [];
    this.accountType = accountType;
    this.interestRate = accountType === 'savings' ? 0.02 : 0;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      this.recordTransaction('deposit', amount);
      this.checkBalanceAlert();
    }
  }

  public withdraw(amount: number): boolean {
    if (amount > 0 && this.balance >= amount) {
      this.balance -= amount;
      this.recordTransaction('withdrawal', amount);
      this.checkBalanceAlert();
      return true;
    }
    return false;
  }

  private recordTransaction(type: string, amount: number): void {
    const transaction = new Transaction(type, amount, this.balance);
    this.transactions.push(transaction);
    this.notifyTransaction(transaction);
  }

  private checkBalanceAlert(): void {
    if (this.balance < 100) {
      this.sendLowBalanceAlert();
    }
  }

  private generateAccountNumber(): string {
    return \`ACC\${Date.now()}\${Math.floor(Math.random() * 1000)}\`;
  }

  private sendLowBalanceAlert(): void {
    NotificationService.sendAlert(
      this.accountNumber,
      'Low Balance Alert',
      \`Your account balance is below $100. Current balance: $\${this.balance}\`
    );
  }
}`;

export const ProjectManagementTool = `class Project {
  private id: string;
  private name: string;
  private tasks: Task[];
  private team: TeamMember[];
  private deadline: Date;
  private status: 'planning' | 'in-progress' | 'completed' | 'on-hold';

  constructor(name: string, deadline: Date) {
    this.id = \`PRJ\${Date.now()}\`;
    this.name = name;
    this.tasks = [];
    this.team = [];
    this.deadline = deadline;
    this.status = 'planning';
  }

  public addTask(task: Task): void {
    this.tasks.push(task);
    this.updateProjectStatus();
    this.notifyTeamMembers('New task added: ' + task.name);
  }

  public assignTeamMember(member: TeamMember, task: Task): void {
    task.assignTo(member);
    this.notifyTeamMembers(\`\${member.name} assigned to \${task.name}\`);
    this.updateTaskDependencies(task);
  }

  private updateProjectStatus(): void {
    const completedTasks = this.tasks.filter(task => task.status === 'completed');
    const progress = (completedTasks.length / this.tasks.length) * 100;

    if (progress === 100) {
      this.status = 'completed';
    } else if (progress > 0) {
      this.status = 'in-progress';
    }

    this.updateProjectMetrics();
  }

  private updateTaskDependencies(task: Task): void {
    const dependentTasks = this.tasks.filter(t => t.dependencies.includes(task.id));
    dependentTasks.forEach(dependentTask => {
      if (this.areDependenciesMet(dependentTask)) {
        dependentTask.status = 'ready';
      }
    });
  }

  private areDependenciesMet(task: Task): boolean {
    return task.dependencies.every(depId => 
      this.tasks.find(t => t.id === depId)?.status === 'completed'
    );
  }

  private updateProjectMetrics(): void {
    const metrics = {
      completion: this.calculateCompletion(),
      timeRemaining: this.calculateTimeRemaining(),
      teamWorkload: this.calculateTeamWorkload()
    };
    ProjectDashboard.updateMetrics(this.id, metrics);
  }
}`;