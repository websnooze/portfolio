const PageItem = ({ ...item }) => {
	return (
		<article className="flex flex-col gap-2">
			<h3 className="text-2xl font-semibold font-display pb-2 border-b border-default/15">
				{item.label}
			</h3>
			<p
				className="text-default"
				dangerouslySetInnerHTML={{ __html: item.content }}
			/>
			{item.list && (
				<ul className="list-disc ps-6 space-y-3.5 pl-4 text-default text-base">
					{item.list.map((listItem: string) => (
						<li
							key={listItem}
							className="text-default marker:text-content3 marker:ml-1 ps-1.5 marker:brightness-150"
						>
							{listItem}
						</li>
					))}
				</ul>
			)}
		</article>
	);
};

export default PageItem;
