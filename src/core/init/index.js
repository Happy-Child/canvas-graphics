import {getEl} from "../../helpers/dom.helpers";
import {CANVAS_ID} from "../../constants/el-selectors.constants";
import {canvasState} from "../state";

export const initCanvas = () => {
    const canvasNode = document.createElement('canvas');
    canvasNode.setAttribute('id', CANVAS_ID)
    document.querySelector('body').prepend(canvasNode);
    canvasState.node = getEl(CANVAS_ID);
};
