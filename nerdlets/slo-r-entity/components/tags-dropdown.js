import React from 'react';
import PropTypes from 'prop-types';
import { Multiselect } from 'react-widgets';

const TagsDropdown = ({
  entityTags,
  selectedTags,
  handleTagChange,
  disabled
}) => {
  return (
    <>
      <label className="Dropdown-label">Entity Tags</label>
      <Multiselect
        data={entityTags}
        textField={entityTag => `${entityTag.key}=${entityTag.values[0]}`}
        valueField={entityTag => `${entityTag.key}=${entityTag.values[0]}`}
        value={selectedTags}
        onChange={value => {
          handleTagChange(value)();
        }}
        disabled={Boolean(disabled)}
      />
    </>
  );
};

TagsDropdown.propTypes = {
  entityTags: PropTypes.array,
  selectedTags: PropTypes.array,
  handleTagChange: PropTypes.func,
  disabled: PropTypes.bool
};

export default TagsDropdown;
