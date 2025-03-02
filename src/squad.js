import { ConversationManager } from './conversation_manager.js';

const DEFAULT_AJENT_API_URL = 'https://spinal.onrender.com/';


export class Squad {

  constructor({agents, apiToken, triageInstruction, apiUrl = DEFAULT_AJENT_API_URL}) {
    this._conversationManager = new ConversationManager(apiUrl, apiToken, agents, triageInstruction);
  }

  async send(message, streamCallback = null) {
    return await this._conversationManager.processMessage(message, streamCallback);
  }

}