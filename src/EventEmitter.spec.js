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

  it('should be able to call emit multiple times', () => {
    eventEmitter.subscribe(mockEventName, mockCallback);
    eventEmitter.emit(mockEventName);
    eventEmitter.emit(mockEventName);
    eventEmitter.emit(mockEventName);
    expect(mockCallback).toHaveBeenCalledTimes(3);
  });

  it('should be able to subscribe to an event more than once.', () => {
    const mockCallback2 = jest.fn();
    eventEmitter.subscribe(mockEventName, mockCallback);
    eventEmitter.subscribe(mockEventName, mockCallback2);
    eventEmitter.emit(mockEventName);
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback2).toHaveBeenCalledTimes(1);
  });

});