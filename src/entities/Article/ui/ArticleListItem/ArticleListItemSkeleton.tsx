import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import css from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/types/articles';
interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(css.ArticleListItem, {}, [className, css[view]])}>
                <Card className={css.card}>
                    <div className={css.header}>
                        <Skeleton border="50%" height={30} width={30} />
                        <Skeleton width={150} height={16} className={css.username} />
                        <Skeleton width={150} height={16} className={css.date} />
                    </div>
                    <Skeleton width={250} height={24} className={css.title} />
                    <Skeleton height={200} className={css.img} />
                    <div className={css.footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(css.ArticleListItem, {}, [className, css[view]])}>
            <Card className={css.card}>
                <div className={css.imageWrapper}>
                    <Skeleton width={200} height={200} className={css.img} />
                </div>
                <div className={css.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={16} className={css.title} />
            </Card>
        </div>
    );
});
