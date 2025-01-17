import React from 'react'
import PropTypes from 'prop-types'
import { RadioGroup as InformedRadioGroup } from 'informed'
import InputLabel from './InputLabel'
import Text from './Text'

const RadioGroup = ({ label, field, description, isRequired, tooltip, children, ...rest }) => (
  <>
    {label && (
      <InputLabel field={field} isRequired={isRequired} tooltip={tooltip}>
        {label}
      </InputLabel>
    )}

    <InformedRadioGroup field={field} required={isRequired} {...rest}>
      {children}
    </InformedRadioGroup>

    {description && (
      <Text color="gray" fontSize="s" mt={2}>
        {description}
      </Text>
    )}
  </>
)

RadioGroup.propTypes = {
  children: PropTypes.node,
  description: PropTypes.node,
  field: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.node,
  tooltip: PropTypes.string,
}

export default RadioGroup
