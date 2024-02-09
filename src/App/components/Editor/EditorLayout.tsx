import { Children, FC, ReactNode } from "react";
import {
	Grid,
	Paper,
	Stack,
	useMediaQuery,
	useTheme,
} from "@mui/material";

const EditorLayoutXS: FC<EditorLayoutProps> = (
	props,
) => {
	const { slotSide, children, slotMain } = props;
	return (
		<Stack
			padding={2}
			spacing={2}
		>
			{slotSide}
			{slotMain}
			{children}
		</Stack>
	);
};

const EditorLayoutSM: FC<EditorLayoutProps> = (
	props,
) => {
	const { children, slotMain, slotSide } = props;

	return (
		<Grid
			container
			height="100vh"
		>
			<Grid
				item
				md={8}
				padding={2}
				height="100%"
				overflow="auto"
				sx={{
					scrollbarWidth: "thin",
				}}
			>
				<Grid
					container
					spacing={2}
				>
					<Grid
						item
						md={12}
					>
						{slotMain}
					</Grid>
					{[0, 1].map((colIndex) => (
						<Grid
							key={`main-col-${colIndex}`}
							item
							md={6}
						>
							<Stack spacing={2}>
								{Children.toArray(children)
									.filter(
										(_, index) =>
											index % 2 === colIndex,
									)
									.map((item, index) => (
										<Paper
											key={`main-col-${colIndex}-item-${index}`}
											sx={{ padding: 2 }}
										>
											{item}
										</Paper>
									))}
							</Stack>
						</Grid>
					))}
				</Grid>
			</Grid>
			<Grid
				item
				md={4}
				height="100%"
				overflow="auto"
			>
				<Paper sx={{ padding: 2 }}>
					{slotSide}
				</Paper>
			</Grid>
		</Grid>
	);
};

type EditorLayoutProps = {
	children: ReactNode;
	slotSide: ReactNode;
	slotMain: ReactNode;
};
export const EditorLayout: FC<
	EditorLayoutProps
> = (props) => {
	const { slotSide, slotMain, children } = props;
	const theme = useTheme();
	const isScreenSizeXS = useMediaQuery(
		theme.breakpoints.down("sm"),
	);
	if (isScreenSizeXS) {
		return (
			<EditorLayoutXS
				children={children}
				slotMain={slotMain}
				slotSide={slotSide}
			/>
		);
	}
	return (
		<EditorLayoutSM
			children={children}
			slotMain={slotMain}
			slotSide={slotSide}
		/>
	);
};
