// Types
import { IService } from 'types/service'

export interface IValidationResult {
  isValid: boolean
  errors?: IService
}
