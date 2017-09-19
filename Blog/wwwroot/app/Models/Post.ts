export class Post {
  Name: string;
  Value: string;
  Data: string;
  HashTag: string;

  constructor(name:string, value:string, data:string, hashtag:string) {
    this.Name = name;
    this.Value = value;
    this.Data = data;
    this.HashTag = hashtag;
  }
}