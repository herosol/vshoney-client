import http from "../../helpers/http";
import * as helpers from "../../helpers/helpers";
import { toast } from "react-toastify";
import { TOAST_SETTINGS } from "../../utils/siteSettings";
import Text from "../../components/common/Text";

import {
  FETCH_TRAINING_CONTENT,
  FETCH_TRAINING_CONTENT_SUCCESS,
  FETCH_TRAINING_CONTENT_FAILED
} from "./actionTypes";

export const fetchTraining = () => (dispatch) => {
  dispatch({
    type: FETCH_TRAINING_CONTENT,
    payload: null
  });
  http
    .get("training")
    .then(({ data }) => {
      dispatch({
        type: FETCH_TRAINING_CONTENT_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_TRAINING_CONTENT_FAILED,
        payload: error
      });
    });
};
