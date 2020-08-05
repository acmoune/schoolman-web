import React from 'react'
import IEnrollment from '../server/src/models/accounts/Enrollment'
import EnrollmentItemContent from './EnrollmentItemContent'

export default function EnrollmentItem({ enrollment, onSelect }: { enrollment: IEnrollment, onSelect: () => void  }) {
  return (
    <div onClick={() => onSelect()} style={{ cursor: 'pointer' }}>
      <EnrollmentItemContent enrollment={enrollment} />
    </div>
  )
}
