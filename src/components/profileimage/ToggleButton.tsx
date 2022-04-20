import React from 'react'

const ToggleButton = () => {
  const isChecked = (e) => {}

  return (
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
      <label class="btn btn-secondary active">
        <input type="radio" name="options" id="option1" checked={isChecked} />
        Active
      </label>
      <label class="btn btn-secondary">
        <input type="radio" name="options" id="option2" checked={isChecked} />
        Radio
      </label>
      <label class="btn btn-secondary">
        <input type="radio" name="options" id="option3" checked={isChecked} />
        Radio
      </label>
    </div>
  )
}

export default ToggleButton
