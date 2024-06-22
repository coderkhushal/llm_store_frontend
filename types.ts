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

export type DashBoardRoutesType= {
    name: string;
    href: string;
    icon: any
}