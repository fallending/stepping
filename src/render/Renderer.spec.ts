import {test} from "ava";
import {EventEntity, SVGGenerator, EventPositionEntity, IGenerator, Renderer} from "eventstorming";

test('should return correctly node svg', t => {
  let svgGenerator = new SVGGenerator();
  let renderer = new Renderer(svgGenerator);

  let eventEntities: EventEntity[] = [];
  let eventEntity = new EventEntity('sticker had created');

  eventEntities.push(eventEntity);
  renderer.createEntity(eventEntity, eventEntities);

  let result = renderer.render();
  t.deepEqual(result, `<svg width=\"1024\" height=\"1024\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"> <g>
              <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" rx=\"2\" ry=\"2\" fill=\"#FFCC33\"/>
              <text x=\"0\" y=\"30\" fill=\"#000\">
                <tspan x=\"5\" dy=\"0\">sticker had created</tspan>
              </text>
            </g> </svg>`);

  renderer.createEntity(eventEntity, eventEntities);
});
