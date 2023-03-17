import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const textInpurRef = document.querySelector('#datetime-picker');
const startButtonRef = document.querySelector('[data-start]');
let pickedDate = null;
const options = {
  minDate: 'today',
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates, dateStr) {
    console.log(selectedDates[0]);
    pickedDate = dateStr;
  },
};

flatpickr(textInpurRef, options);

startButtonRef.addEventListener('click', makeStartTimerToPickDay);

function makeStartTimerToPickDay() {
  const date = new Date(pickedDate);
  console.log(date.getTime());
}
