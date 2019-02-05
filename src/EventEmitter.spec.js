import { EventEmitter } from './EventEmitter';

describe('EventEmitter', () => {
  let eventEmitter, mockCallback, mockEventName;

  beforeEach(() => {
    eventEmitter = new EventEmitter();
    mockCallback = jest.fn();
    mockEventName = 'some-event';
  });

  it('should be able to subscribe to an event', () => {
    eventEmitter.subscribe(mockEventName, mockCallback);
    eventEmitter.emit(mockEventName);
    expect(mockCallback).toHaveBeenCalled();
  });

  it('should return a unsubscribe function from subscription and be able to unsubscribe to an event', () => {
    const unsubscribe = eventEmitter.subscribe(mockEventName, mockCallback);
    eventEmitter.emit(mockEventName);
    unsubscribe();
    eventEmitter.emit(mockEventName);
    expect(mockCallback).toHaveBeenCalled();
  });
});