

function checkLeadingZero(num:number) {
  if (num > 9) {
    return num;
  }
  return `0${num}`;
}



export function formatDuration(duration: number) {
  const hours = Math.floor(duration / 60 / 60);
  const minutes = Math.floor((duration - hours * 60 * 60) / 60);
  const seconds = duration % 60;

  if (hours > 0) {
    return `${hours}:${checkLeadingZero(minutes)}:${checkLeadingZero(seconds)}`
  }

  return `${minutes}:${checkLeadingZero(seconds)}`
}