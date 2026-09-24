import { Button } from '@mui/material'
import { FormError, ReportFormRoot, ReportInput } from '../styled/ReportForm.styles.js'

export default function ReportForm({ formik, onCancel }) {
  const hasError = formik.touched.reportName && formik.errors.reportName

  return (
    <ReportFormRoot component="form" onSubmit={formik.handleSubmit} noValidate>
      <ReportInput
        name="reportName"
        value={formik.values.reportName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Enter report title"
        aria-invalid={Boolean(hasError)}
        autoFocus
      />
      {hasError && <FormError>{formik.errors.reportName}</FormError>}
      <Button type="submit" variant="contained">Add</Button>
      <Button type="button" onClick={onCancel}>Cancel</Button>
    </ReportFormRoot>
  )
}
