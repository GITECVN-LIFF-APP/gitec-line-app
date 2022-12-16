// Types
import { IService } from 'types/service'
import { IValidationResult } from 'types/serviceValidation'

// Constants
import { REQUIRED } from '@constants/msgError'

/**
 * Validate empty input value
 * @param value input value
 * @returns true/false
 */
const isEmpty = (value: string | number): boolean => {
  return !!value
}

export const validationService = (service: IService) => {
  const result: IValidationResult = { isValid: true }

  result.errors = {
    idCustomer: '',
    gasStation: '',
    nameService: '',
    pickDateTime: '',
    selectedCar: '',
  }

  if (!isEmpty(service.idCustomer)) {
    result.errors.idCustomer = `Id customer + ${REQUIRED}`
  }

  if (!isEmpty(service.gasStation)) {
    result.errors.gasStation = `Gastation + ${REQUIRED}`
  }

  if (!isEmpty(service.nameService)) {
    result.errors.nameService = `Name service + ${REQUIRED}`
  }

  if (!isEmpty(service.pickDateTime)) {
    result.errors.pickDateTime = `Pick date time + ${REQUIRED}`
  }

  if (!isEmpty(service.selectedCar)) {
    result.errors.selectedCar = `Selected car + ${REQUIRED}`
  }

  // Result
  const validate = result.errors

  if (
    validate.idCustomer ||
    validate.gasStation ||
    validate.nameService ||
    validate.pickDateTime ||
    validate.selectedCar
  ) {
    result.isValid = false
  }

  return result
}
