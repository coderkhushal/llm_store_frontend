export type LLM = {
  id: string;
  title: string;
  content: string;
  costPerMonth: number;
  sellerId:string;
  uploadedAt: string;
  modelImage: string;
  category:CategoryType;
  rating?: string;
  displayImage: string;
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
export type CategoryObjType = {
    icon: any;
    name: string;
}
export type CategoryType= "PHARMACY" | "CHATTING" | "EDUCATION" | "ECOMMERCE" | "FITNESS" | "TRADING" | "OTHERS"
export type UserType= {
  id: string;
  username: string;
  email: string;
  modelsbought: BuyerLLMRecordType[]
  review : ReviewType[]
  modelsuploaded: LLM[]
  imageUrl: string | null
}

export type ReviewType= {
  id: string;
  reviewContent: string;
  reviewerId: string;
  modelId: string;
  rating: number
  reviewDate: string;
}