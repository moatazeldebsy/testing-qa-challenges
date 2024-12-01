import {
  flowRendererV2,
  flowStyles
} from "./chunk-IEG72JTM.js";
import {
  flowDb,
  parser$1
} from "./chunk-PJU5XRY3.js";
import "./chunk-2RWQ36QK.js";
import "./chunk-H3YIB5IE.js";
import "./chunk-CSWUSI4N.js";
import "./chunk-WM72TPAG.js";
import "./chunk-TP2MS74E.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-UZRKDCXQ.js";
import {
  __toESM
} from "./chunk-PR4QN5HX.js";

// node_modules/mermaid/dist/flowDiagram-v2-96b9c2cf.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-96b9c2cf-AWLRI5H4.js.map
