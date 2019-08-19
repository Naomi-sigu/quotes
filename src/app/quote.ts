
export class Quotes {
  showDescription: boolean;
  public upvote: number;
  public downvote: number;
  constructor(public id: number, public name: string, public description: string, public publisher: string, public completeDate: Date) {
    this.showDescription = false;
    this.upvote = 0;
    this.downvote = 0;
  }
}
