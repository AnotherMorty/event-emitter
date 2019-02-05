import { EventEmitter } from './EventEmitter';

describe('EventEmitter', () => {
  it('should be able to subscribe to an event', () => {
    const eventEmitter = new EventEmitter();
    const mockCallback = jest.fn();
    const mockEventName = 'some-event';
    eventEmitter.subscribe(mockEventName, mockCallback);
    eventEmitter.emit(mockEventName);
    expect(mockCallback).toHaveBeenCalled();
  })
});