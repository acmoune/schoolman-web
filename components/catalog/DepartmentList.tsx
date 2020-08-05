import * as React from 'react'
import DepartmentBox from './DepartmentBox'
import IDepartment from '../../server/src/models/catalog/Department'

export default function DepartmentList({ departments }: { departments: IDepartment[] }) {
  return (
    <div>
      {departments.map(d => <DepartmentBox key={d.id} department={d} />)}
    </div>
  )
}
