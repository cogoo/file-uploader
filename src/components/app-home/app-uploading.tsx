import { Component } from '@stencil/core';

@Component({
  tag: 'app-uploading',
})
export class Uploading {
  render() {
    return (
      <button class="btn btn--secondary btn--round app-home__btn">
        Uploading
        <svg
          width="30"
          height="30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          class="lds-facebook">
          <rect
            ng-attr-x="{{config.x1}}"
            ng-attr-y="{{config.y}}"
            ng-attr-width="{{config.width}}"
            ng-attr-height="{{config.height}}"
            ng-attr-fill="{{config.c1}}"
            x="17.5"
            y="30"
            width="15"
            height="40"
            fill="#e8820c">
            <animate
              attributeName="y"
              calcMode="spline"
              values="18;30;30"
              keyTimes="0;0.5;1"
              dur="0.9"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.18000000000000002s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="height"
              calcMode="spline"
              values="64;40;40"
              keyTimes="0;0.5;1"
              dur="0.9"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.18000000000000002s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            ng-attr-x="{{config.x2}}"
            ng-attr-y="{{config.y}}"
            ng-attr-width="{{config.width}}"
            ng-attr-height="{{config.height}}"
            ng-attr-fill="{{config.c2}}"
            x="42.5"
            y="29.9424"
            width="15"
            height="40.1151"
            fill="#e35839">
            <animate
              attributeName="y"
              calcMode="spline"
              values="20.999999999999996;30;30"
              keyTimes="0;0.5;1"
              dur="0.9"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.09000000000000001s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="height"
              calcMode="spline"
              values="58.00000000000001;40;40"
              keyTimes="0;0.5;1"
              dur="0.9"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.09000000000000001s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            ng-attr-x="{{config.x3}}"
            ng-attr-y="{{config.y}}"
            ng-attr-width="{{config.width}}"
            ng-attr-height="{{config.height}}"
            ng-attr-fill="{{config.c3}}"
            x="67.5"
            y="29.6661"
            width="15"
            height="40.6679"
            fill="#d28d4f">
            <animate
              attributeName="y"
              calcMode="spline"
              values="24;30;30"
              keyTimes="0;0.5;1"
              dur="0.9"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="height"
              calcMode="spline"
              values="52;40;40"
              keyTimes="0;0.5;1"
              dur="0.9"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
              begin="0s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </button>
    );
  }
}
