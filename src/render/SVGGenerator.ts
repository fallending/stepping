import {EventPositionEntity} from "../entity/EventPositionEntity";

export class SVGGenerator {
  buildBody(node): string {
    return `<svg width="1024" height="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"> ${node} </svg>`
  }

  buildNode(stickyEntities: EventPositionEntity, extend?: object, options?: object): string {
    let extendField = '';
    let sameLevelField = '';
    let color = '#FFCC33';

    if (extend && extend['level'] === 'same') {
      extendField = extend['content'];
    }

    if (extend && extend['level'] === 'child') {
      sameLevelField = extend['content'];
    }

    if (options && options['color']) {
      color = options['color'];
    }

    let entity = stickyEntities.entity;
    let pos = stickyEntities.pos;

    return `<g>
              <rect x="${pos.x}" y="${pos.y}" width="100" height="100" rx="2" ry="2" fill="${color}"/>
              <text x="${pos.x}" y="${pos.y + 30}" fill="#000">
                <tspan x="${pos.x + 5}" dy="0">${entity.name}</tspan>
              </text>${extendField}
            </g>${sameLevelField}`
  }

  buildChild() {

  }

  buildNodes(stickyEntities: EventPositionEntity[]) {
    let result: string = '';
    for (let index in stickyEntities) {
      result = result + this.buildNode(stickyEntities[index]);
    }
    return result;
  }

  build(stickyEntities: EventPositionEntity[]): string {
    let baseNodeString = this.buildNodes(stickyEntities);
    return this.buildBody(baseNodeString);
  }
}
