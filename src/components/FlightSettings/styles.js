import styled from 'styled-components';

export const Container = styled.div`
  margin: 24px;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  color: #000;

  .originAndDestiny {
    display: flex;
    justify-content: space-between;
    padding: 12px;

    .origin, .destiny {
      h3 {
        background-color: #f2f2f2;
        margin-bottom: 8px;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      background-color: #ddd;
    }
  }

  input {
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 2px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    width: 40vw;
  }

  .datepicker {
    border-bottom: solid #ccc 1px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .buttons {
    margin-top: 12px;
  }

  .react-datepicker {
  font-size: 1.4em;
}
.react-datepicker__header {
  padding-top: 0.8em;
}
.react-datepicker__month {
  margin: 0.4em 1em;
}
.react-datepicker__day-name, .react-datepicker__day {
  width: 1.9em;
  line-height: 1.9em;
  margin: 0.166em;
}
.react-datepicker__current-month {
  font-size: 1em;
}
.react-datepicker__navigation {
  top: 1em;
  line-height: 1.7em;
  border: 0.45em solid transparent;
}
.react-datepicker__navigation--previous {
  border-right-color: #ccc;
  left: 1em;
}
.react-datepicker__navigation--next {
  border-left-color: #ccc;
  right: 1em;
}
`;
