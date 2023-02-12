
import { random } from 'lodash';

export const sendErrorToSentry = (Screen: any, Module: any, Function:any, Message:any, Data:any) => {
    let errorSentry = {
      id : random(),
      screen: Screen,
      function: Function,
      module: Module,
      data: Data,
      error: Message
  }

  throw new Error(JSON.stringify(errorSentry));
};
