export interface EventType {
  title: string;
  date: string;
  people: EventPeopleType[];
  city: string;
  location: string;
  peopleInterested: number;
  image: string;
}

export interface EventPeopleType {
  name: string;
  role: string;
  image: string;
}
