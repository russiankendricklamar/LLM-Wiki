---
title: 'Distributed Systems: CAP and Consensus'
category: Advanced CS and Graphs
order: 153
lang: en
slug: distributed-systems-consensus
---

Distributed systems manage state across networked machines, balancing availability and consistency.

### CAP Theorem
Brewer's CAP Theorem states that a distributed data store can simultaneously provide at most two of the following:
1. **Consistency:** Every read receives the most recent write or an error.
2. **Availability:** Every request receives a (non-error) response.
3. **Partition tolerance:** The system continues to operate despite arbitrary message loss/delay.

### Paxos Consensus
Paxos guarantees safety (never returning an incorrect result) in an asynchronous network. A value $v$ is chosen when a majority (quorum) of acceptors accept it. The protocol uses two phases (Prepare/Promise, Accept/Accepted) with monotonically increasing proposal numbers $n$ to prevent conflicting majorities. Raft is a modern, more understandable equivalent relying on strong leader election.
