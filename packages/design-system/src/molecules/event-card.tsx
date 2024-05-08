import { Button, Card, CardMeta, Image } from '../atoms';
import { cn } from "../utils";

typeEventCardPros {
    title: string;
    description: string;
    imgSrc?: string; 
}

export const EventCard: React.FC<EventCardPros> = ({ title, description, imgSrc }) => {
    return (
        <Card 
            cover={
                <Image
                    alt={title}
                    className={cn('w-[150px] h-[150px] object-cover')}
                    src={imgSrc}
                    fallback='https://via.placeholder.com/150'
                />
            } 
        >
            <CardMeta 
                title={title}
                description={description}
            />
            <Button>{"Saiba mais >"}</Button>
        </Card>
    );
};