import {Entity, model, property} from '@loopback/repository';
import {Item} from './item.model';

@model()
export class Library extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property.array(Item, {
    default: [],
  })
  items: Item[];

  constructor(data?: Partial<Library>) {
    super(data);
  }
}

export interface LibraryRelations {
  // describe navigational properties here
}

export type LibraryWithRelations = Library & LibraryRelations;
