import React from 'react';

export default class ProgressBar extends React.Component {
  secondsToString(time) {
    const minutes = `${time / 60}`;
    let seconds = time % 60;
    (seconds < 10) ? seconds = `0${seconds}` : `${seconds}`;
    return `${minutes}:${seconds}`
  }

  stringToSeconds(string) {
    const time = string.split(':');
    return time[0] * 60 + time[1];
  }

  percentPlayed(timeElapsed, runtime) {
    const songLength = this.stringToSeconds(runtime);
    const percent = Math.ceil(timeElapsed / runtime);
    return percent.toString();
  }

  render() {
    const { runtime, timeElapsed } = this.props;
    const width = (runtime) ? `${this.percentPlayed(timeElapsed, runtime)}%` : "0%";
    return (
      <div className="progress-bar">
        <p>{this.secondsToString(timeElapsed)}</p>

        <div className="progress-bar-outline">
          <div 
            className="progress-bar-fill"
            width={`${width}`}
            // height="10px"
          >
          </div>
        </div>

        <p>{runtime || '0:00'}</p>
      </div>
    )
  }
}