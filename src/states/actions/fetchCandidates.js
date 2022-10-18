import http from "../../helpers/http";
import * as helpers from "../../helpers/helpers";
import { toast } from "react-toastify";
import { TOAST_SETTINGS } from "../../utils/siteSettings";
import Text from "../../components/common/Text";

import {
  FETCH_CANDIDATES_CONTENT,
  FETCH_CANDIDATES_CONTENT_SUCCESS,
  FETCH_CANDIDATES_CONTENT_FAILED
} from "./actionTypes";

export const fetchCandidates = () => (dispatch) => {
  dispatch({
    type: FETCH_CANDIDATES_CONTENT,
    payload: null
  });
  http
    .get("candidates")
    .then(({ data }) => {
      dispatch({
        type: FETCH_CANDIDATES_CONTENT_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_CANDIDATES_CONTENT_FAILED,
        payload: error
      });
    });
};
