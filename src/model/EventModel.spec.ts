import {test} from 'ava';
import {BaseModel, EventModel} from 'stepping';

test('should enable add model', t => {
  let eventModel = new EventModel();

  let baseModel = new BaseModel();
  let base = baseModel.create({
    name: 'event should be created'
  });

  let event = eventModel.create({
    name: 'event should be created',
    relatedChild: base
  });

  let getRelated = eventModel.getRelatedChildById(base.id);

  t.deepEqual(base['name'], getRelated['name']);
});
