import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Library, LibraryRelations} from '../models';

export class LibraryRepository extends DefaultCrudRepository<
  Library,
  typeof Library.prototype.id,
  LibraryRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Library, dataSource);
  }
}
