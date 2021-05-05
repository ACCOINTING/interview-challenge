export function delayMs(time: number): Promise<void> {
    const delay = Math.max(time, 0);
    return new Promise(resolve => setTimeout(resolve, delay));
}
