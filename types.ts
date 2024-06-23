export type LLM = {
  id: string;
  title: string;
  content: string;
  costPerMonth: number;
  sellerId:string;
  uploadedAt: string;
  modelImage: string;
  category:string;
  rating?: string;
}
export type BuyerLLMRecordType={
  id: string;
  buyerId: string;
  modelId: string;
  boughtAt: string;
  isActive: boolean;
  expiryDate: string;
}
export type DashBoardRoutesType= {
    name: string;
    href: string;
    icon: any
}
export type CategoryType = {
    icon: any;
    name: string;
}

export type UserType= {
  id: string;
  username: string;
  email: string;
  modelsbought: BuyerLLMRecordType[]
  review : ReviewType[]
}

export type ReviewType= {
  id: string;
  reviewContent: string;
  reviewerId: string;
  modelId: string;
  rating: number
  reviewDate: string;
}