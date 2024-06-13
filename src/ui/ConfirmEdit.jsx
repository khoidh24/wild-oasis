/* eslint-disable react/prop-types */
import styled from 'styled-components'
import Button from './Button'
import Heading from './Heading'

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`

function ConfirmDelete({
  resourceName,
  onConfirm,
  disabled,
  onCloseModal,
  confirmFieldName
}) {
  return (
    <StyledConfirmDelete>
      <Heading as='h3'>
        {confirmFieldName} {resourceName}
      </Heading>
      <p>
        Are you sure you want to {confirmFieldName} this {resourceName}?
      </p>

      <div>
        <Button
          variation='secondary'
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button variation='primary' disabled={disabled} onSubmit={onConfirm}>
          {confirmFieldName}
        </Button>
      </div>
    </StyledConfirmDelete>
  )
}

export default ConfirmDelete
