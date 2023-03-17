import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import convertMs from './comvert-ms';

const refs = {
  textInpur: document.querySelector('#datetime-picker'),
  startButton: document.querySelector('[data-start]'),
  daysField: document.querySelector('[data-days]'),
  hoursField: document.querySelector('[data-hours]'),
  minutesField: document.querySelector('[data-minutes]'),
  secondsField: document.querySelector('[data-seconds]'),
};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose,
};
let pickedDate = null;

refs.startButton.setAttribute('disabled', 'true');
flatpickr(refs.textInpur, options);

function makeStartTimer() {
  setInterval(() => {
    difference = convertMs(pickedDate - new Date().getTime());
    console.log(difference);
  }, 1000);
}

function onClose(selectedDates) {
  pickedDate = selectedDates[0].getTime();

  if (pickedDate < new Date().getTime()) {
    refs.startButton.setAttribute('disabled', 'true');
    alert('"Please choose a date in the future"');
    return;
  }

  refs.startButton.removeAttribute('disabled');
}

refs.startButton.addEventListener('click', makeStartTimer);
