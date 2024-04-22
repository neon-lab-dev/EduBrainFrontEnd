export interface ICourse {
  _id: string
  title: string
  description: string
  views: number
  numOfVideos: number
  category: string
  createdBy: string
  createdAt: string
  poster: {
    url: string
    public_id: string
  }
}
