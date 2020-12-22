## Couch DB

-    The CouchDB document update model is lockless and optimistic. Document edits are made by client applications loading documents, applying changes, and saving them back to the database. If another client editing the same document saves their changes first, the client gets an edit conflict error on save. To resolve the update conflict, the latest document version can be opened, the edits reapplied and the update tried again.

-   Single document updates (add, edit, delete) are all or nothing, either succeeding entirely or failing completely. The database never contains partially saved or edited documents.

-   When an MVCC database like CouchDB needs to update a piece of data, it will not overwrite the original data item with new data, but instead creates a newer version of the data item. Thus there are multiple versions stored. Any changes made by a writer will not be seen by other users of the database until the changes have been completed. Any number of clients can be reading documents without being locked out or interrupted by concurrent updates, even on the same document. CouchDB read operations use a Multi-Version Concurrency Control (MVCC) model where each client sees a consistent snapshot of the database from the beginning to the end of the read operation.

-   Documents are indexed in B-trees by their name (DocID) and a Sequence ID. Each update to a database instance generates a new sequential number. Sequence IDs are used later for incrementally finding changes in a database. These B-tree indexes are updated simultaneously when documents are saved or deleted.

-   When CouchDB documents are updated, all data and associated indexes are flushed to disk and the transactional commit always leaves the database in a completely consistent state. Commits occur in two steps:

1.  All document data and associated index updates are synchronously flushed to disk.
2.  The updated database header is written in two consecutive, identical chunks to make up the first 4k of the file, and then synchronously flushed to disk.


