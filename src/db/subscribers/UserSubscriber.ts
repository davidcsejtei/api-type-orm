import {EntitySubscriberInterface, EventSubscriber, InsertEvent} from "typeorm";
import {User} from "../entities/User";

@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface<User> {
    listenTo() {
        return User;
    }

    beforeInsert(event: InsertEvent<User>) {
        console.log(`BEFORE User INSERTED: `, event.entity);
    }
}
