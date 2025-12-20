
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl?: string;
}

export interface EstimateRequest {
  firstName: string;
  lastName: string;
  address: string;
  lawnSize?: string;
  additionalInfo?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
