export type ServerStatus = 'online' | 'offline' | 'unknown';
export type TrafficInfo = {
    id: string,
    value: number
};
export type TicketData = {
    title: string,
    request: string
}
export type Ticket = TicketData & {
    id: string,
    status: 'open' | 'closed'
};