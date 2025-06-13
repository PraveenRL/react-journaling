import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const Chips = ({ onAdd, onDelete, selectedChips = [] }) => {
  const chipData = [
    { id: 0, label: "Happy", icon: "😄" },
    { id: 1, label: "Sad", icon: "😔" },
    { id: 2, label: "Angry", icon: "😠" },
    { id: 3, label: "Fearful", icon: "😨" },
    { id: 4, label: "Surprised", icon: "😲" },
    { id: 5, label: "Excited", icon: "🤩" },
    { id: 6, label: "Bored", icon: "🙄" },
    { id: 7, label: "Confused", icon: "😕" },
    { id: 8, label: "Anxious", icon: "😟" },
    { id: 9, label: "Calm", icon: "😌" },
    { id: 10, label: "Grateful", icon: "🙏" },
    { id: 11, label: "Hopeful", icon: "😇" },
    { id: 12, label: "Disgusted", icon: "🤢" },
    { id: 13, label: "Ashamed", icon: "😳" },
    { id: 14, label: "Jealous", icon: "😒" },
    { id: 15, label: "Overwhelmed", icon: "😵‍💫" },
    { id: 16, label: "Frustrated", icon: "😤" },
    { id: 17, label: "Lonely", icon: "😞" },
    { id: 18, label: "Relieved", icon: "😮" },
    { id: 19, label: "Nostalgic", icon: "🥺" },
    { id: 20, label: "Determined", icon: "💪" },
    { id: 21, label: "Inspired", icon: "✨" },
    { id: 22, label: "Loving", icon: "❤️" },
  ];

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => (
        <ListItem key={data.id}>
          <Chip
            label={data.icon + " " + data.label}
            onClick={() => onAdd(data)}
            onDelete={
              selectedChips.some((chip) => chip.id === data.id)
                ? () => onDelete(data)
                : undefined
            }
            color={
              selectedChips.some((chip) => chip.id === data.id)
                ? "primary"
                : "default"
            }
          />
        </ListItem>
      ))}
    </Paper>
  );
};

export default Chips;
