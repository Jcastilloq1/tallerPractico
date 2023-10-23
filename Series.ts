class Series {
    id: number;
    name: string;
    description: string;
    channel: string;
    seasons: number;
    link1: string;
    link2: string;
    constructor(id: number, completeName: string, channel: string, seasons: number, description: string, link1: string, link2:string) {
      this.id = id;
      this.name = completeName;
      this.channel = channel;
      this.seasons = seasons;
      this.link1 = link1;
      this.link2 = link2;
      this.description = description;
    }
  }