import { s3Bucket, s3Region } from '../app.config'

export default {
  getFileUrl: (fileName: string): string => `https://${s3Bucket}.s3-${s3Region}.amazonaws.com/${fileName}`
}
