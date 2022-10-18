import http from "../../helpers/http";
import * as helpers from "../../helpers/helpers";
import { toast } from "react-toastify";
import { TOAST_SETTINGS } from "../../utils/siteSettings";
import Text from "../../components/common/Text";

import {
  FETCH_EMPLOYER_HOME_CONTENT,
  FETCH_EMPLOYER_HOME_CONTENT_SUCCESS,
  FETCH_EMPLOYER_HOME_CONTENT_FAILED
} from "./actionTypes";

export const fetchEmployerHome = () => (dispatch) => {
  dispatch({
    type: FETCH_EMPLOYER_HOME_CONTENT,
    payload: null
  });
  http
    .get("employer-home")
    .then(({ data }) => {
      dispatch({
        type: FETCH_EMPLOYER_HOME_CONTENT_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_EMPLOYER_HOME_CONTENT_FAILED,
        payload: error
      });
    });
};
